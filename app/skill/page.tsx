"use client"
import { useEffect } from "react"

function setProgress(element: HTMLElement, value: number) {
    const angle = (value / 100) * 360;
    const progressColor = element.getAttribute('data-color') || '#000';
    element.style.background = `conic-gradient(${progressColor} ${angle}deg, #444 ${angle}deg)`;
  }
  
  function animateProgress(
    progressElement: HTMLElement,
    endValue: number,
    speed: number
  ) {
    let startValue = 0;
    const progressValueElement = progressElement.querySelector(
      '.progress-value'
    ) as HTMLElement | null;
  
    const interval = setInterval(() => {
      startValue++;
      if (progressValueElement) {
        progressValueElement.textContent = `${startValue}%`;
      }
      setProgress(progressElement, startValue);
  
      if (startValue === endValue) {
        clearInterval(interval);
      }
    }, speed);
  }
  
  const skill: React.FC = () => {
    useEffect(() => {
      const progressElements = [
        { id: 'progress1', endValue: 70 },
        { id: 'progress2', endValue: 70 },
        { id: 'progress3', endValue: 50 },
        { id: 'progress4', endValue: 55 },
        { id: 'progress5', endValue: 78 },
        { id: 'progress6', endValue: 5 },
      ];
  
      progressElements.forEach(({ id, endValue }) => {
        const progressElement = document.getElementById(id);
        if (progressElement) {
          animateProgress(progressElement, endValue, 20);
        }
      });
    }, []); 
  return (
    <div>
         <section className="skills" id="skills">
      SKILLS
      <div className="progress-container">
        <div className="progress" id="progress1" data-color="#e34c26">
          <div className="progress-inner">
            <div className="progress-value" id="progress-value1"></div>
            <div className="progress-label">HTML</div>
          </div>
        </div>
        <div className="progress" id="progress2" data-color="#2965f1">
          <div className="progress-inner">
            <div className="progress-value" id="progress-value2">0%</div>
            <div className="progress-label">CSS</div>
          </div>
        </div>
        <div className="progress" id="progress3" data-color="#E5A42A">
          <div className="progress-inner">
            <div className="progress-value" id="progress-value3">0%</div>
            <div className="progress-label">JS</div>
          </div>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress" id="progress4" data-color="#007acc">
          <div className="progress-inner">
            <div className="progress-value" id="progress-value4"></div>
            <div className="progress-label">TS</div>
          </div>
        </div>
        <div className="progress" id="progress5" data-color="#68A063">
          <div className="progress-inner">
            <div className="progress-value" id="progress-value5">0%</div>
            <div className="progress-label">NODEJS</div>
          </div>
        </div>
        <div className="progress" id="progress6" data-color="#88dded">
          <div className="progress-inner">
            <div className="progress-value" id="progress-value6">0%</div>
            <div className="progress-label">REACT</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default skill;