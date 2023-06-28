import wretch from 'wretch';

export interface ContactData {
  email: string;
  message: string;
}

export async function contactPostService(
  data: ContactData
): Promise<ContactData | any> {
  try {
    const response = await wretch('https://formspree.io/f/xdovlonj')
      .post(data)
      .error(503, (err) => {
        return err;
      })
      .res();
    return response;
  } catch (error) {
    return error;
  }
}
