# Only JSX JavaScript Project

This project aims to develop a JavaScript application for simple needs using the power of JSX syntax. It's built without using React, solely relying on JSX. Bootstrap 5 is also utilized for styling. Inspired by the article by Arnaud Dostes on [Medium](https://adostes.medium.com/you-dont-need-react-to-use-jsx-b78dd2a95c27).

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Project:** First, clone this repository to your local machine.
    ```bash
    git clone https://github.com/username/project-name.git
    ```

2. **Navigate to the Project:** Go to the cloned directory.
    ```bash
    cd only-jsx
    ```

3. **Start the project:**
    ```bash
    npm run start
    ```

4. **Open in Browser:** Visit `localhost:8080` (or the port number you're using) in your browser, and you should see the project running.

## Project Structure
    .
    ├── runtime
    │   └── jsx-runtime.js      # Runtime for rendering JSX-IR.
    │  
    ├── src                    
    │   ├── components          # Common jsx components
    │   ├── js
    │   │   └── main.js         # Entry point
    │   ├── pages               # View files 
    │   ├── scss                # Styles folder
    │   └── App.js              # App file for project 
    └── ...


## Technologies Used

- **JSX:** JavaScript's XML-like syntax used to create dynamic and flexible UIs.
- **Bootstrap 5:** CSS and JS library used to quickly create beautiful-looking user interfaces.
- **Webpack:** Module bundler.

## Acknowledgements

This project was inspired by the article by Arnaud Dostes on [Medium](https://adostes.medium.com/you-dont-need-react-to-use-jsx-b78dd2a95c27), which emphasizes the usage of JSX without relying on React.

## Contributions

We welcome any contributions and suggestions. If you find a bug or want to add a feature, please open an Issue or submit a Pull Request.

## License

This project is licensed under the MIT License. For more information, see the `LICENSE` file.
