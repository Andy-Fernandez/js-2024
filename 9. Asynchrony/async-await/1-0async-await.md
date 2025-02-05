really good info:
https://javascript.info/async-await

### Summary
The async keyword before a function has two effects:

Makes it always return a promise.
Allows await to be used in it.
The await keyword before a promise makes JavaScript wait until that promise settles, and then:

If it’s an error, an exception is generated — same as if throw error were called at that very place.
Otherwise, it returns the result.
Together they provide a great framework to write asynchronous code that is easy to both read and write.

With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.