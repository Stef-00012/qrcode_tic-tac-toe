let turn = "X"

    const combinations = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a3", "b3", "c3"],
        ["a1", "b2", "c3"],
        ["a3", "b2", "c1"]
    ]

    const allButtons = document.querySelectorAll("button")

    function play(id) {
        const btn = document.getElementById(id)

        btn.innerText = turn
        btn.disabled = true

        checkWinner()

        turn = turn == "X" ? "O" : "X"
    }

    function checkWinner() {
        for (const combination of combinations) {
            const [a, b, c] = combination

            const btnA = document.getElementById(a).innerText
            const btnB = document.getElementById(b).innerText
            const btnC = document.getElementById(c).innerText

            if (["X", "O"].includes(btnA) && btnA === btnB && btnB === btnC) {
                alert(`${btnA} wins!`)

                return reset()
            }
        }

        const avaibleButtons = []

        for (const button of allButtons) {
            if (button.disabled) continue
            avaibleButtons.push(button)
        }

        if (avaibleButtons.length == 0) {
            alert("It's a tie")
            reset()
        }
    }

    function reset() {
        for (const button of allButtons) {
            button.disabled = false
            button.innerHTML = "&#8203"
        }

        turn = "X"
    }