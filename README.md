Recipe Management App

The Recipe Management App allows users to create, manage, and share their favorite recipes. Users can upload images of their recipes using Multer for handling file uploads and Cloudinary for cloud storage. The app provides features like adding ingredients, cooking instructions, and categorizing recipes. It ensures seamless image handling and secure storage, making it easy for users to showcase their culinary creations. 

Features

✅ User authentication (optional)

✅ Add, edit, delete, and view recipes

✅ Upload images with Multer

✅ Store images securely in Cloudinary

Tech Stack

Frontend: JavaScript

Backend: Node.js, Express.js

Database: MongoDB 

Image Upload: Multer, Cloudinary

 Set up Cloudinary

Create an account on Cloudinary

Get your Cloud Name, API Key, and API Secret

Create a .env file and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

API Endpoints

Method               Endpoint	               Description

POST	              /upload	              Uploads recipe images

GET	                /recipes	               Fetch all recipes

POST	             /recipes	                 Add a new recipe

PUT              	/recipes/:id	            Update a recipe

DELETE	             /recipes/:id	             Delete a recipe




