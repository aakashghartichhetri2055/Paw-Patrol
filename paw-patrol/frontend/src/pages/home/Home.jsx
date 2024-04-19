import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './main-pet.webp';
import './Home.css';

const Home = () => {
  const [quote, setQuote] = useState({
      text: "Saving one animal won't change the world, but for that one animal, the world will change forever.",
      animate: "slide-in"
  });
  const [welcomeMessage, setWelcomeMessage] = useState({
      text: "Welcome to Paw Patrol!",
      animate: "slide-in"
  });

  const quotes = useMemo(() => [
      "Every animal deserves a loving home, and we're here to make that happen. Join us in our journey to provide care and new homes to animals in need. Your support can change lives.",

      "Together, we can make a significant difference in the lives of animals in need. By adopting, you're not just saving a pet; you're giving them a new chapter in life.",

      "Why shop when you can adopt? Giving a shelter animal a chance for a better life is a noble act. Let's find you a loyal companion who is waiting for just a friend like you.",

      "Showing compassion for animals is what makes us human. Let's strive together to create a better world for them, just as they do to enrich our lives every day.",

      "Until one has loved an animal, a part of one's soul remains unawakened. Love an animal today, and you might discover a new part of yourself."
  ], []);

  const welcomeMessages = useMemo(() => [
      "Welcome to Paw Patrol, where every animal gets a second chance at happiness! We're dedicated to rescuing and sheltering animals in need, and providing them with the love and care they deserve.",

      "Thank you for joining us at Paw Patrol! Together, we can achieve wonders and give countless animals a new lease on life. Your support means the world to us and to every animal we save.",

      "Hello and welcome! You have reached Paw Patrol, where we tirelessly work to ensure every animal is cherished. Join our mission and be a part of something greater than all of us.",

      "Welcome to the family of animal lovers at Paw Patrol! Here, we treat each rescue like our own, giving them the best chance at a new life. Your involvement could mean everything to an animal in need.",

      "We are so glad you are here at Paw Patrol! With your help, we can continue our mission to rescue, rehabilitate, and rehome animals that are in dire need of love. Let's make a difference together."
  ], []);

    useEffect(() => {
      const intervalId = setInterval(() => {
          const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
          const randomWelcomeIndex = Math.floor(Math.random() * welcomeMessages.length);
          setQuote({ text: quotes[randomQuoteIndex], animate: "slide-out" });
          setWelcomeMessage({ text: welcomeMessages[randomWelcomeIndex], animate: "slide-out" });
  
          setTimeout(() => {
              setQuote({ text: quotes[randomQuoteIndex], animate: "slide-in" });
              setWelcomeMessage({ text: welcomeMessages[randomWelcomeIndex], animate: "slide-in" });
          }, 500); 
      }, 5000);
  
      return () => clearInterval(intervalId);
  }, [quotes, welcomeMessages]);
  

    return (
      <div>
      <section className="welcome-section" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="welcome-content">
          <div className={`welcome-text ${welcomeMessage.animate}`}>
            <h1>{welcomeMessage.text}</h1>
          </div>
          <div className={`quote-text ${quote.animate}`}>
            <p><strong>"{quote.text}"</strong></p>
          </div>
        </div>
      </section>

{/* After first page */}
<section className="mission-section">
    <div className="content">
        <h2>Our Mission</h2>
        <p>At Paw Patrol, our unwavering commitment to animal welfare drives everything we do. Our mission is to create a world where every animal is valued, cherished, and provided with the care they deserve. Through a comprehensive and compassionate approach, we strive to make a profound and lasting impact on the lives of animals and the communities we serve.</p>
        
        <h3>Rescue Operations</h3>
        <p>Our dedicated team of trained professionals and volunteers work tirelessly to rescue animals in need. Whether they are abandoned, injured, or facing life-threatening situations, we are there to provide immediate assistance. From swift emergency response to meticulous medical care, we ensure that each animal receives the attention and support required to thrive.</p>
        <p>Furthermore, our commitment doesn't end with rescue. We believe in rehabilitation and strive to address the physical, emotional, and behavioral needs of every animal under our care. Through tailored rehabilitation plans and a nurturing environment, we prepare them for their journey to finding loving forever homes.</p>
        
        <h3>Support for Animal Shelters</h3>
        <p>Collaboration is at the heart of our efforts to support local animal shelters. Recognizing the vital role these shelters play in animal welfare, we provide essential resources, including financial aid, medical supplies, and volunteer assistance. By strengthening their capacity to care for animals, we contribute to creating a network of safe havens where animals are treated with compassion and respect.</p>
        
        <h3>Public Education</h3>
        <p>We understand that sustainable change begins with education. That's why we are committed to fostering a culture of responsible pet ownership through comprehensive educational initiatives. Our workshops, seminars, and outreach programs are designed to equip individuals with the knowledge and skills needed to provide optimal care for their pets.</p>
        <p>Moreover, we advocate for animal welfare issues on local, national, and global platforms, raising awareness about topics such as adoption, spaying and neutering, and the ethical treatment of animals. By empowering communities with information, we strive to create a more compassionate and informed society.</p>
        
        <p>Ultimately, our mission is grounded in the belief that every animal deserves to live a life free from suffering and filled with love. Together, we can make a difference and build a brighter future for animals and humans alike.</p>
    </div>
</section>


<section className="features-section">
    <div className="content">
        <h2>Exclusive Features</h2>
        <ul>
            <li>AI-Powered Matching System: Our innovative matching system utilizes artificial intelligence to analyze your lifestyle, preferences, and personality traits to pair you with the perfect pet companion.</li>
            <li>Success Stories: Discover heartwarming tales of animals finding their forever homes. These stories serve as inspiration and motivation for others to embark on their own journey of animal rescue and adoption.</li>
            <li>Comprehensive Support: We provide a range of resources and services to support pet owners, including educational materials, training workshops, and access to a supportive community of fellow animal lovers.</li>
            <li>24/7 Helpline: Our dedicated helpline offers round-the-clock assistance for pet owners facing emergencies, behavioral issues, or general inquiries.</li>
        </ul>
        <Link to="/about" className="btn">Learn More</Link>
    </div>
</section>

<section className="statistics-section">
    <div className="content">
        <h2>Our Impact in Numbers</h2>
        <p>At our organization, every statistic represents a story of hope, resilience, and compassion. Here's a deeper look into the meaningful impact we've made:</p>
        <ul>
            <li>Over 2,000 Animals Rescued Annually: Behind this number are countless tales of survival and transformation. From the frightened puppy rescued from a cruel breeding operation to the senior cat abandoned at a busy intersection, each rescue mission is a testament to our unwavering dedication to alleviating suffering and providing sanctuary to those in need. Our team of compassionate volunteers and staff members work around the clock, braving adverse conditions and overcoming obstacles to ensure that every animal receives the care and attention they deserve.</li>
            <li>More than 1,200 Successful Adoptions Each Year: Behind every adoption statistic lies a heartwarming reunion between an animal and their forever family. Whether it's the joyous wag of a dog's tail as they meet their new human companion or the purr of contentment from a kitten curled up in a cozy lap, each adoption represents a new beginning filled with love and companionship. Our rigorous adoption process ensures that each animal is matched with the perfect family, ensuring a lifetime of happiness and security.</li>
            <li>Over $150,000 Raised Annually for Animal Care: Beyond the numbers, this figure represents the collective generosity and compassion of our supporters. From grassroots fundraisers to corporate sponsorships, every donation contributes to the well-being of our animals. These funds enable us to provide essential medical treatment, nutritious food, comfortable shelter, and enriching activities for the animals under our care. Through transparent financial stewardship and accountability, we ensure that every dollar is maximized to make the greatest impact possible.</li>
            <li>Community Engagement and Education: Our commitment to animal welfare extends beyond rescue and adoption. Through community outreach initiatives, we empower individuals of all ages to become advocates for animals. From school presentations that instill empathy and kindness in young minds to workshops on responsible pet ownership for adults, we strive to foster a culture of compassion and respect for all living beings. By raising awareness about issues such as animal cruelty, overpopulation, and the importance of spaying/neutering, we aim to create a more humane and compassionate society for generations to come.</li>
        </ul>
        <p>Behind each statistic lies a profound story of compassion, resilience, and hope. Together, we are not just changing numbers; we are changing lives and building a brighter future for animals in need. If you want to be a part of this transformative journey and make a difference in your community, please visit our website to learn more about our work and how you can get involved.</p> <Link to="/events" className="btn">Read More</Link>
    </div>
</section>

<section className="testimonials-section">
    <div className="content">
        <h2>Adoption Tales</h2>
        <p>Discover heartwarming stories of animals finding their forever homes and the joy they bring to their new families. These tales of love, resilience, and companionship illustrate the incredible impact of adoption, not just on the lives of animals but also on the hearts of those who welcome them into their homes.</p>
        <p>Whether it's a senior dog finding solace in the gentle touch of a caring owner or a timid kitten blossoming into a playful companion, each story highlights the transformative power of compassion and the profound bond that forms between humans and animals.</p>
        <p>If you're in need of some inspiration or simply want to experience the heartwarming journey of adoption, click below to explore these touching stories.</p>
        <h3>Featured Adoption Stories:</h3>
        <div className="adoption-stories">
            <div className="story">
                <h4>Buddy's Journey</h4>
                <p>Buddy, a once-neglected senior dog, found himself at a local shelter after being surrendered by his previous owners. Despite his age and health issues, Buddy's resilient spirit caught the eye of a compassionate couple who decided to give him a second chance. Today, Buddy enjoys leisurely walks in the park, cozy naps by the fireplace, and endless belly rubs from his adoring family.</p>
            </div>
            <div className="story">
                <h4>Luna's New Beginning</h4>
                <p>Luna, a shy and timid cat, spent months in a rescue shelter waiting for someone to see past her initial apprehension. When a kind-hearted woman visited the shelter and patiently sat with Luna, offering gentle words of encouragement, a bond was formed. Now, Luna spends her days lounging in sunny spots, playing with feather toys, and showering her new owner with affectionate headbutts.</p>
            </div>
            <div className="story">
                <h4>Max's Tale of Resilience</h4>
                <p>Max, a brave little terrier mix, overcame incredible odds after being found abandoned in a cardboard box on the side of the road. Despite his rough start in life, Max's indomitable spirit and infectious enthusiasm won the hearts of a loving family who saw past his scars and saw the potential for a bright future. Now, Max enjoys romping through the fields, chasing butterflies, and spreading joy wherever he goes.</p>
            </div>
        </div>
        <Link to="/stories" className="btn">Read More Stories</Link>
    </div>
</section>

<section className="events-section">
    <div className="content">
        <h2>Join Us at Upcoming Events</h2>
        <p>Experience the transformative power of compassion and community by participating in our upcoming events dedicated to animal care and rescue.</p>
        <p>At [Organization Name], we believe in the collective impact of individuals coming together to make a difference. Our events not only raise vital funds for the well-being of animals but also provide opportunities for education, advocacy, and connection.</p>
        <p>Here's what you can expect from our upcoming events:</p>
        <ul>
            <li><strong>Adoption Drives:</strong> Find your perfect furry companion and give a shelter animal a forever home.</li>
            <li><strong>Fundraising Galas:</strong> Dress up for a glamorous evening of dining, entertainment, and auctions, all in support of animal rescue efforts.</li>
            <li><strong>Volunteer Opportunities:</strong> Get involved directly by joining us for volunteer days, where you can lend a hand in caring for animals or helping with event logistics.</li>
            <li><strong>Community Workshops:</strong> Learn about responsible pet ownership, animal welfare issues, and how you can make a positive impact in your community.</li>
        </ul>
        <p>By attending our events, you not only support our mission but also become part of a compassionate community dedicated to making the world a better place for animals.</p>
        <p>Together, we can create a future where every animal is valued, loved, and given the care they deserve.</p>
        <Link to="/events" className="btn">Explore Upcoming Events</Link>
    </div>
</section>


{/*Involved Section */}
<section className="get-involved-section">
    <div className="content">
        <h2>Get Involved</h2>
        <p>There are numerous ways you can contribute to our cause and make a difference in the lives of animals:</p>
        <ul>
            <li>Volunteer Opportunities: Join our team of dedicated volunteers and lend a helping hand at events, shelters, or with administrative tasks.</li>
            <li>Foster Care: Provide temporary homes for animals in need, offering them love, care, and socialization until they are ready for adoption.</li>
            <li>Donations: Your financial support enables us to continue our rescue efforts, provide medical care, and sustain our programs and services.</li>
            <li>Spread the Word: Help raise awareness about our organization and the importance of animal welfare by sharing our mission with your friends, family, and social networks.</li>
        </ul>
        <p>Your involvement, no matter how big or small, has a meaningful impact on the lives of animals in need.</p>
        <Link to="/contact" className="btn">Get Involved</Link>
    </div>
</section>
        </div>
    );
};

export default Home;
