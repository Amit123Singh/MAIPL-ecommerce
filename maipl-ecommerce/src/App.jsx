import React from 'react';
import Icon1 from './assets/svgs/ab.svg?react';
import Icon2 from './assets/svgs/ac.svg?react';
import Icon3 from './assets/svgs/ad.svg?react';



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
  <section className="relative bg-gray-100 py-20 md:py-32 flex items-center justify-center text-center overflow-hidden">    {/* Content */}
    <div className="relative z-10 flex items-center justify-center">
        <span className="text-4xl text-green-600 opacity-50 transform -scale-x-100">🌿</span>
        <div className="mx-8">
            <img
                src="/hero.png"
                alt="Woman in white top"
                className="rounded-lg shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x350/ffffff/cccccc?text=Image+Not+Found'; }}
            />
        </div>
        <span className="text-4xl text-green-600 opacity-50">🌿</span>
    </div>
  </section>
);

// About Text Section Component
const AboutTextSection = () => (
  <section className="py-16 sm:py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
      </h3>
      <p className="mt-6 text-gray-600 leading-relaxed">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-800">WHAT PEOPLE SAY</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                            <img
                                className="w-24 h-24 rounded-full object-cover flex-shrink-0 mb-4 sm:mb-0 sm:mr-6"
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e0e0e0/cccccc?text=Error'; }}
                            />
                            <div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                                <h4 className="mt-4 font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">MULTIKART TEAM MEMBER</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center bg-white p-4 rounded-lg transition-shadow duration-300 hover:shadow-xl">
                            <div className="relative overflow-hidden rounded-md">
                                <img
                                    className="w-full h-auto object-cover"
                                    src={member.image}
                                    alt={member.name}
                                    onError={(e) => { e.target.onerror = null; e.targe.src='https://placehold.co/400x500/f0f0f0/cccccc?text=Error'; }}
                                />
                            </div>
                            <div className="mt-4">
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
                        <div key={index} className="flex items-center justify-center md:justify-start">
                            <div className="text-4xl mr-4">{<feature.icon className="h-12 w-12 text-orange-500" />}</div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
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
            <FeaturesSection />
        </main>
    </div>
  );
};
export default App;