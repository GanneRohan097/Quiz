let i = 0;
        var o,but,x=0,score=0;
        let questions = [];

        async function app() {
            for (let j = 1; j <= 4; j++) {
            let btn = document.getElementById('a' + j);
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
}
            x=0;  
            if (questions.length === 0) {
                let data = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
                let res = await data.json();
                questions = res.results;
            }

            if (i >= questions.length) {
                document.getElementById('question').innerText = "Quiz Completed! 🎉";
                for (let j = 1; j <= 4; j++) {
                const btn = document.getElementById('a' + j);
                btn.style.display = 'none';
                }
                document.getElementById('next').style.display='none';
                let s = document.createElement('div');
                s.innerText = `🎯 Your Score: ${score} / 10`;
                s.style.margin = '50px auto';
                s.style.padding = '20px 30px';
                s.style.textAlign = 'center';
                s.style.backgroundColor = '#f0f8ff';
                s.style.borderRadius = '15px';
                s.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                s.style.fontSize = '24px';
                s.style.fontWeight = 'bold';
                s.style.color = '#333';
                s.style.maxWidth = '300px';

                document.getElementById('box').appendChild(s);

                return;
            }

            let q = questions[i].question;
            document.getElementById('question').innerHTML = i+1+". "+q;
            console.log(q);

            o = Math.floor(Math.random() * 4) + 1;
            if (o == 1) {
                document.getElementById('a1').innerText = questions[i].correct_answer;
            }
            else if (o == 2) {
                document.getElementById('a2').innerText = questions[i].correct_answer;
            }
            else if (o == 3) {
                document.getElementById('a3').innerText = questions[i].correct_answer;
            }
            else if (o == 4) {
                document.getElementById('a4').innerText = questions[i].correct_answer;
            }

            if (o == 1) {
                document.getElementById('a2').innerText = questions[i].incorrect_answers[0];
                document.getElementById('a3').innerText = questions[i].incorrect_answers[1];
                document.getElementById('a4').innerText = questions[i].incorrect_answers[2];
            }
            else if (o == 2) {
                document.getElementById('a1').innerText = questions[i].incorrect_answers[0];
                document.getElementById('a3').innerText = questions[i].incorrect_answers[1];
                document.getElementById('a4').innerText = questions[i].incorrect_answers[2];
            }
            else if (o == 3) {
                document.getElementById('a2').innerText = questions[i].incorrect_answers[0];
                document.getElementById('a1').innerText = questions[i].incorrect_answers[1];
                document.getElementById('a4').innerText = questions[i].incorrect_answers[2];
            }
            else if (o == 4) {
                document.getElementById('a2').innerText = questions[i].incorrect_answers[0];
                document.getElementById('a3').innerText = questions[i].incorrect_answers[1];
                document.getElementById('a1').innerText = questions[i].incorrect_answers[2];
            }

            if (i!=10) {
              i++;
            }
        }

        function check(n) {
            if(Number(n[1])==o){
                but=document.getElementById(n);
                but.style.backgroundColor='Green'
                but.style.color='White'
                x++;
                score++;
            }
            else if(x<1){
                but=document.getElementById(n);
                but.style.backgroundColor='Red'
                but.style.color='White'
                let cbut=document.getElementById('a'+o);
                cbut.style.backgroundColor='Green'
                cbut.style.color='White'
                x++;
            }
            
        }

        function move() {
            const button = document.querySelector("button");
            button.innerText='Next>>'
            button.classList.add("move-right");
            setTimeout(() => {
                button.classList.remove("move-right");
            }, 1000);

        }
