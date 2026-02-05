export function toJSON(formResponses: any[]) {
  return formResponses.map((response) => {
    const answers: Record<string, string> = {};

    for (const [questionId, answer] of Object.entries<any>(response.answers)) {
      answers[questionId] = answer.textAnswers?.answers
        ?.map((a: any) => a.value)
        .join(", ");
    }

    return {
      responseId: response.responseId,
      createTime: response.createTime,
      lastSubmittedTime: response.lastSubmittedTime,
      answers,
    };
  });
}

