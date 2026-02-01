import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formID = process.env.FORM_ID
// TODO: Replace with a valid response ID.
const responseID = '<YOUR_RESPONSE_ID>';

/**
 * Retrieves a single response from a form.
 */
export async function getSingleResponse() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, "credentials.json"),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1' as const,
    auth,
  });

  // Get the specified response from the form.
  const result = await formsClient.forms.responses.get({
    formId: formID,
    responseId: responseID,
  });

  console.log(result.data);
  return result.data;
}
/**
 * Retrieves all responses from a form.
 */
export async function getAllResponses() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1' as const,
    auth,
  });

  // Get the list of responses for the form.
  const result = await formsClient.forms.responses.list({
    formId: formID,
  });

  console.log(result.data);
  return result.data;
}