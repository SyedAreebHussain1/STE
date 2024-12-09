import { useEffect, useRef, useState } from "react";
import {
  cardImage,
  cardImage2,
  cardImage3,
} from "../../../../../assets/website";

const Solutions = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Unobserve if you only want to trigger once
        }
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 10% of the element is in view
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const card1 = document.getElementById("card1") as HTMLElement | null;
      const cards = document.querySelectorAll(
        ".solution-card"
      ) as NodeListOf<HTMLElement>;

      // Animate the first card to the center
      let count = 0;
      setTimeout(() => {
        cards.forEach((card) => {
          /* if four image */
          // card.style.transform =
          // "translateY(0) translateX(calc(200% - 25px)) rotate(10deg)";

          /* if three image  */
          count++;
          card.style.transform = `translateY(0) translateX(calc(150% - 25px)) rotate(${
            count * 10
          }deg)`;

          card.style.opacity = "1";
        });
      }, 0);

      // Animate the rest of the cards after 0.2s
      setTimeout(() => {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.transform = `translateY(0) translateX(${
              index * 420
            }px) rotate(0deg)`;
            card.style.opacity = "1";
          }, index * 10); // Stagger the animation
        });
      }, 800);
    }
  }, [isInView]);

  return (
    <div className=" flex-col items-center relative mt-[50px] hidden md:flex">
      <div className="flex flex-col items-center gap-[20px] ">
        <h1 className="  text-[#01B847] text-[18px] font-medium">SOLUTIONS</h1>
        <h1 className="heading-l font-bold w-full text-center leading-10 ">
          Solutions you can rely on.
        </h1>
      </div>
      <div
        className="solution-cards-container flex justify-center h-[680px] w-full px-[30px] mt-[50px] overflow-y-hidden overflow-x-scroll custom-scrollbar"
        id="cardsContainer"
        ref={elementRef}
      >
        <div className="relative h-[75%] top-[30px] w-[1260px]">
          <SolutionCards
            list={[
              "Market Research & Feasibility: Understanding the AI landscape, market opportunities, and the feasibility of integrating AI solutions into the business model.",
              "Business Strategy Development: Tailoring AI adoption strategies to align with the company’s goals, such as improving operational efficiency, enhancing customer experiences, or driving innovation.",
            ]}
            heading="Real-Time Industry Data Gathering"
            para="Our tool continuously gathers real-time industry data, market trends, and competitor information so that your idea can be validated thoroughly."
            image={cardImage}
            id={"card1"}
          />
          <SolutionCards
            list={[
              "Income Statements: Track revenue, expenses, and profitability over specific periods, providing insights into operational efficiency.",
              "Balance Sheets: Offer a snapshot of the company’s financial position at a given time, detailing assets, liabilities, and equity.",
              "Cash Flow Projections: Forecast cash inflows and outflows to ensure liquidity and financial stability, helping users manage their cash effectively.",
            ]}
            heading="Personalized Financial Projections"
            para="Create and analyze your business’s revenue streams, expenses, and growth projections, accessing real-time market data and industry benchmarks for accurate financial forecasts."
            image={cardImage2}
            id={"card2"}
          />{" "}
          <SolutionCards
            list={[
              "Identifying Relevant Competitors: Identify and analyze competitors that are pertinent to your business idea and geographic location. This process involves gathering essential information that will inform your strategy and positioning in the market.",
              "Gathering Competitor Information: Collect comprehensive data on competitors' products, pricing strategies, marketing approaches, and customer reviews. This information is crucial for understanding how competitors operate and what makes them successful or vulnerable.",
              "Highlighting Key Differentiators: Analyze and highlight the key differentiators that set your business apart from competitors. Understanding these unique aspects will help you articulate your value proposition more effectively.",
            ]}
            heading="Automated Competitor Analysis"
            para="Identify and analyze relevant competitors based on your business idea and location, gathering information on their products, pricing, marketing strategies, and customer reviews. Highlight key differentiators and potential areas for improvement compared to your competitors"
            image={cardImage3}
            id={"card3"}
          />{" "}
          {/* <SolutionCards
            list={[
              "Market Research & Feasibility: Understanding the AI landscape, market opportunities, and the feasibility of integrating AI solutions into the business model.",
              "Business Strategy Development: Tailoring AI adoption strategies to align with the company’s goals, such as improving operational efficiency, enhancing customer experiences, or driving innovation.",
              "Ethics & Compliance: Ensuring that AI solutions comply with regulatory standards and ethical considerations.",
            ]}
            heading="AI Strategy and Consulting"
            image={cardImage}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

const SolutionCards = ({
  image,
  heading,
  list,
  para,
  id,
}: {
  image: string;
  heading: string;
  list: string[];
  id: string;
  para: string;
}) => {
  return (
    <div className="solution-card z-10 h-full w-[375px]" id={id}>
      <div className="flex flex-col gap-2 p-[20px] h-full">
        <div className="h-full  rounded-xl  w-full Solution-Card-image overflow-hidden relative">
          <img src={image} className="w-full absolute top-0 left-0" />
        </div>
        <div className="h-[55%] w-full Solution-Card-contain custom-scrollbar">
          <h1 className="Solution-Card-contain-h1 ">{heading}</h1>
          <p className="text-[15px] text-[#4A5366] font-medium Solution-Card-contain-p leading-[26px]">
            {para}
          </p>
          {list?.length > 0 && (
            <ul className="Solution-Card-contain-Ul">
              {list?.map((item: any, index: number) => (
                <li key={index} className="Solution-Card-contain-Li">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
