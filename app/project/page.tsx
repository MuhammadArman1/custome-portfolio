import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Project: React.FC = () => {
  return (
    <div>
      <section className="projects" id="project">
        <h1>PROJECTS</h1>
        <div className="banner">
          <div className="slider" style={{ '--quantity': 9 } as React.CSSProperties}>
            <div className="item" style={{ '--position': 1 } as React.CSSProperties}>
              <Link href="https://github.com/MuhammadArman1/ATM-machine.git" target='_blank'>
                  <Image src={"/ATMmachine.jpg"} alt="ATM Machine" width={150} height={150} />
              </Link>
              ATM-MACHINE
            </div>
            <div className="item" style={{ '--position': 2 } as React.CSSProperties}>
              <Link href="https://github.com/MuhammadArman1/Simple_Calculator.git" target='_blank'>
                  <Image src={"/calculator.jpg"} alt="Calculator" width={150} height={150} />
              </Link>
              CALCULATOR
            </div>
            <div className="item" style={{ '--position': 3 } as React.CSSProperties}>
              <Link href="https://github.com/MuhammadArman1/currency_converter.git" target='_blank'>
                  <Image src={"/currency-converter.jpg"} alt="Currency Converter" width={150} height={150} />
              </Link>
              CURRENCY-CONVERTER
            </div>
            <div className="item" style={{ '--position': 4 } as React.CSSProperties}>
              <Link href="https://number-guessing-game-dun.vercel.app/" target='_blank'>
                  <Image src={"/Numberguessinggame.png"} alt="Number Guessing Game" width={150} height={150} />
              </Link>
              NUMBER-GUESSING GAME
            </div>
            <div className="item" style={{ '--position': 5 } as React.CSSProperties}>
              <Link href="https://todo-app-kappa-taupe-81.vercel.app/" target='_blank'>
                  <Image src={"/todo list.jpg"} alt="Todo List" width={150} height={150} />
              </Link>
              TODO-LIST
            </div>
            <div className="item" style={{ '--position': 6 } as React.CSSProperties}>
              <Link href="https://github.com/MuhammadArman1/quiz.git" target='_blank'>
                  <Image src={'/quiz.jpg'} alt="Quiz" width={150} height={150} />
              </Link>
              QUIZ
            </div>
            <div className="item" style={{ '--position': 7 } as React.CSSProperties}>
              <Link href="https://github.com/MuhammadArman1/Word_Counter.git" target='_blank'>
                  <Image src={"/wordcounter.png"} alt="Word Counter" width={150} height={150} />
              </Link>
              WORD-COUNTER
            </div>
            <div className="item" style={{ '--position': 8 } as React.CSSProperties}>
              <Link href="https://hackathon-resume-builder-milstone-5.vercel.app/" target='_blank'>
                  <Image src={"/Resume builder.png"} alt="Resume Builder" width={150} height={150} />
              </Link>
              RESUME BUILDER
            </div>
            <div className="item" style={{ '--position': 9 } as React.CSSProperties}>
              <Link href="https://grocery-list-teal-zeta.vercel.app/" target='_blank'>
                  <Image src={"/g.jfif"} alt="Grocery App" width={150} height={150} />
              </Link>
              Grocery App
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
