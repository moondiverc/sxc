import emailjs from "@emailjs/browser";


export const useEmailJS = () => {
  const sendEmail = (data: {
    name: string;
    message: string;
    email: string;
    subject: string;
  }) => {
    
    return emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    );
  };

  return { sendEmail };
};
