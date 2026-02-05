import path from "node:path";
import { authenticate } from "@google-cloud/local-auth";
import { forms } from "@googleapis/forms";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const formID = process.env.FORM_ID;
const responseID = "<YOUR_RESPONSE_ID>";
let cached: Promise<{ formsClient: any }> | null = null;

async function getFormsClient() {
  if (!cached) {
    cached = (async () => {
      const auth = await authenticate({
        keyfilePath: path.join(__dirname, "credentials.json"),
        scopes: ["https://www.googleapis.com/auth/forms.responses.readonly"],
      });
      const formsClient = forms({ version: "v1", auth });
      return { formsClient };
    })();
  }
  return cached;
}

/**
 * Retrieves a single response from a form.
 */
export async function getSingleResponse() {
 const {formsClient} = await getFormsClient();
  const result = await formsClient.forms.responses.get({formId: formID,responseId: responseID,});

  return result.data.responses ?? [];
}
/**
 * Retrieves all responses from a form.
 */
export async function getAllResponses() {
  const { formsClient } = await getFormsClient();

  let allResponses: any[] = [];
  let pageToken: string | undefined;

  do {
    const res = await formsClient.forms.responses.list({
      formId: formID,
      pageToken,
    });

    allResponses.push(...(res.data.responses ?? []));
    pageToken = res.data.nextPageToken;
  } while (pageToken);

  console.log("Total responses:", allResponses.length);

  return allResponses;
}


