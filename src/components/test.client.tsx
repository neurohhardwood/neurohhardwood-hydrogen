export const Test = () => {
  console.log('some test here');
  const value = Deno.env.get('MY_IMPORTANT_VARIABLE');
  console.log('MY_IMPORTANT_VARIABLE', value);
};
