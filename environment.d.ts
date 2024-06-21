declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_WEBSITE_NAME: string;
            EMAIL_SENDER: string;
            EMAIL_RECEIVER: string;
            EMAIL_PASSWORD: string;
            EMAIL_SUBJECT: string;
            EMAIL_FROM: string;
        }
    }
}
  
export {}