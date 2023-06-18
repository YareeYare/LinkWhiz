
# LinkWhiz

The LinkWhiz project is a web application that provides a convenient way to shorten long URLs and includes additional features such as adding notes to URLs and a search functionality. It allows users to input a lengthy URL along with an optional note and generates a shortened version. These shortened URLs can be easily shared and managed. The application also provides a search feature to find past URLs based on notes, long URLs, and shortened URLs.


## How to run the project

To get started with the LinkWhiz application, follow these steps:

1. Clone the repository to your local machine using `git clone` , or Download the source code as a ZIP file.
2. Navigate to the project directory: `cd Code`
3. Install the dependencies using `npm install`
4. Start the LinkWhiz application: `node ./index.js`
5. Access the application by opening a web browser and navigating to `http://localhost:4623`




## Internal Working
The LinkWhiz project follows a secure mechanism to shorten URLs, provide redirection functionality, enable note addition and search, and implement user authentication. Here's an overview of its internal working:

1. **User Registration and Login:**

* When a user registers, their password is encrypted using bcrypt before storing it in the database.
* On subsequent login attempts, the provided password is compared with the stored bcrypt-encrypted password to validate the user's credentials.
* Upon successful authentication, a JWT (JSON Web Token) is generated and sent to the client.
* The JWT is used to authenticate and authorize subsequent requests from the user.

2. **URL Shortening and Note Addition:**
* When a registered user submits a long URL along with an optional note, the application generates a short URL for it.
* The original URL, note, and their short URL are associated with the user's account and stored in a MongoDB database.

3. **Shortened URL Redirection:**
* When a user accesses a shortened URL, the application captures the identifier from the URL and retrieves the original URL and note associated with the user's account from the database.
* The user is then redirected to the original URL.

4. **Search Functionality:**
* The application provides a search feature that allows registered users to search for their past URLs based on notes, long URLs, or shortened URLs.
* The search functionality queries the MongoDB database for matching records associated with the user's account and presents the results to the user.

5. **User Authentication with JWT:**
* For protected routes, the user includes the JWT in the request headers.
* The server validates the JWT to authenticate the user's session and authorize access to protected routes.
* If the JWT is valid and not expired, the user is granted access to the requested resource.

## Learning Takeaways
Throughout the development of the LinkWhiz project, I gained the following key takeaways:

1. **Full-Stack Development with Security Considerations:**
I developed a deeper understanding of full-stack web development, integrating security measures such as password encryption and authentication.

2. **Database Integration and User Management:**
I enhanced my skills in integrating MongoDB for user data storage and management. This included handling user registration, login, and associating data with user accounts.

3. **Secure Password Handling:**
I learned how to securely handle user passwords by using bcrypt for password encryption. This ensures that user passwords are not stored in plain text and are adequately protected.

4. **Authentication with JWT:**
I gained experience in implementing user authentication using JWT (JSON Web Tokens). This allowed me to create a secure authentication mechanism for protecting routes and ensuring that only authorized users can access certain resources.

## Resources/References
While working on the LinkWhiz project, I found the following resources and references helpful:

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [bcrypt.js Documentation](https://www.npmjs.com/package/bcrypt)
- [JWT (JSON Web Token) Documentation](https://jwt.io/)