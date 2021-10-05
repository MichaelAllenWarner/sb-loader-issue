export default { title: 'Example/Loader Example' };

export const LoaderExample = (_, { loaded: { foo } }) => foo;

LoaderExample.args = { foo: 'bar' };

// does not re-execute upon changing `foo` in the Controls
LoaderExample.loaders = [async ({ args: { foo } }) => ({ foo })];