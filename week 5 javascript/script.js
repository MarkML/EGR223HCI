const button = document.querySelector("button");

        button.addEventListener("click", updateName);

        function updateName() {
            const name = prompt("Enter a new name");
            button.textContent = `Player 2: ${name}`;
        }