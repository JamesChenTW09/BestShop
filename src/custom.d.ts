declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "he" {
  const content: {
    escape: (string)=>string
  };
  export default content;
}

declare module 'uuid' {
  export function v4(): string;
}