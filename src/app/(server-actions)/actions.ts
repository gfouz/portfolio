"use server"
import { contactService } from "services/contactService";

interface FormData {
  append: (arg0: string, arg1: string) => void; 
  get: (arg0: string) => any;
}


export const onSubmitServerAction = async (formData: FormData) => {
    formData.append('comment', 'some comment');
    const data = {
      email:formData.get("email"),
      comment:formData.get("comment")

    };
    console.log(data)
    contactService(data);
  };