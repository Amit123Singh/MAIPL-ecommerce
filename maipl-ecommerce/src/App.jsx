import React from 'react';
import Icon1 from './assets/svgs/ab.svg?react';
import Icon2 from './assets/svgs/ac.svg?react';
import Icon3 from './assets/svgs/ad.svg?react';
import Faq from './components/Faq';


// Header Component for Breadcrumbs
const Header = () => (
  <header className="bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <p className="mt-2 text-sm text-gray-500">HOME / ABOUT US</p>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section className="relative py-5 flex items-center justify-center text-center overflow-hidden"> 
        <div className="mx-8">
            <img
                src="/hero.png"
                alt="Woman in white top"
                className="rounded-lg shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x350/ffffff/cccccc?text=Image+Not+Found'; }}
            />
        </div>
  </section>
);

// About Text Section Component
const AboutTextSection = () => (
  <section className="py-5 mx-8">
    <div className=" px-4 sm:px-6 lg:px-8 text-center">

      <h3 className="text-2xl text-left md:text-2xl font-bold text-gray-800">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
      </h3>

      <p className="mt-6 text-gray-600 leading-relaxed text-justify">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
      </p>
    </div>
  </section>
);




// Testimonials Section Component
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Mark Junce',
            title: 'Designer',
            quote: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            avatar: '/a.jpg'
        },
        {
            name: 'Mark Junco',
            title: 'Designer',
            quote: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            avatar: '/b.jpg'
        }
    ];

    return (
      
        <section className="bg-gray-50 py-16 sm:py-20">
       
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm text-red-500 font-semibold uppercase">Latest Testimonials</p>
                    <h2 className=" mt-2 text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block text-2xl font-bold
           before:content-['']
           before:absolute
           before:bottom-0
           before:left-1/2
           before:top-12
           before:-translate-x-1/2
           before:w-16
           before:h-1
           before:bg-orange-500">WHAT PEOPLE SAY</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  
                    {testimonials.map((testimonial) => (
                          <figure key={testimonial.id} className="flex flex-col sm:flex-row items-center text-center sm:text-left p-4">
                              <img
                                  className="w-24 h-24 rounded-full object-cover flex-shrink-0 mb-4 sm:mb-0 sm:mr-6"
                                  src={testimonial.avatar}
                                  alt={`Photo of ${testimonial.name}`} 
                                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e0e0e0/cccccc?text=Error'; }}
                              />
                              <div className="flex-grow">
                                  <blockquote className="text-gray-600 italic mb-4">
                                      <p>"{testimonial.quote}"</p>
                                  </blockquote>
                                  <figcaption className="font-medium">
                                      <div className="font-bold text-orange-500">{testimonial.name}</div>
                                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                                  </figcaption>
                              </div>
                          </figure>
                      ))}
                </div>
            </div>
        </section>
    );
};



// Team Section Component
const TeamSection = () => {
    const teamMembers = [
        { name: 'Hileri Keol', role: 'CEO & Founder At Company', image: '/1.jpg' },
        { name: 'Hileri Keol', role: 'CEO & Founder At Company', image: '/2.jpg' },
        { name: 'Hileri Keol', role: 'CEO & Founder At Company', image: '/3.jpg' },
        { name: 'Hileri Keol', role: 'CEO & Founder At Company', image: '/4.jpg' }
    ];

    return (
        <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block text-2xl font-bold
           before:content-['']
           before:absolute
           before:bottom-0
           before:left-1/2
           before:top-12
           before:-translate-x-1/2
           before:w-16
           before:h-1
           before:bg-orange-500">YRAL FOOD TEAM MEMBER</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (

                        <div key={index} className="text-center bg-white p-4 rounded-lg transition-shadow duration-300 hover:shadow-xl border-2 border-gray-300 p-4">
                            <div className="relative overflow-hidden rounded-md">
                                <img
                                    className="w-full h-auto object-cover"
                                    src={member.image}
                                    alt={member.name}
                                    onError={(e) => { e.target.onerror = null; e.targe.src='https://placehold.co/400x500/f0f0f0/cccccc?text=Error'; }}
                                />
                            </div>
                            <div className="mt-4 bg-gray-200 rounded">
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




// Features Section Component
const FeaturesSection = () => {
    const features = [
        {
            icon: Icon1,
            title: 'Free Shipping',
            description: 'Free Shipping World Wide'
        },
        {
            icon: Icon2,
            title: '24 X 7 Service',
            description: 'Online Service For New Customer'
        },
        {
            icon: Icon3,
            title: 'Festival Offer',
            description: 'New Online Special Festival Offer'
        }
    ];

    return (
        <section className="bg-gray-50 border-t border-gray-200 py-12 sm:py-16">
             <img className='hello' src="./assets/ab.svg" alt="" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-center md:justify-start p-4">
                          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                            <feature.icon className="h-12 w-12 text-orange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 text-center sm:text-left">{feature.title}</h3>
                            <p className="text-gray-600 text-center sm:text-left">{feature.description}</p>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};





// Main App Component
const App = () => {
  return (
    <div className="bg-white">
        <Header />
        <main>
            <HeroSection />
            <AboutTextSection />
            <TestimonialsSection />
            <TeamSection />
            {/* <FeaturesSection /> */}
        </main>

        <Faq />
    </div>
  );
};
export default App;