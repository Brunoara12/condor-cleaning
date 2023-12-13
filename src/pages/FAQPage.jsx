import React from 'react'
import { Box } from '@mui/material'
import AccordionComponent from '../components/AccordionComponent';


const FAQPage = () => {

    const FAQ = [
        {
            category: "General"
        },
        {
            question: "What Types Of Cleaning Services Does Condor Cleaning Service Offer?",
            answer: "We have extensive house cleaning services, including apartment cleaning, recurring maid services, deep cleaning, move-in and move-out cleaning, disinfection, carpet cleaning, and office cleaning."
        },
        {
            question: "What Is Included In A Standard House Cleaning Services?",
            answer: "Our standard house cleaning services are customized to meet your needs. They typically include vacuuming, dusting, wiping down surfaces, bathroom and kitchen cleaning, and other essential services."
        },
        {
            question: "Do I Need To Provide Cleaning Supplies For The Service?",
            answer: "Our house cleaners arrive equipped to complete the work with eco-friendly cleaning products to ensure the best results. You don’t have to supply anything."
        },
        {
            question: "Are Your Cleaners Trained And Insured?",
            answer: "We carry insurance for all our cleaners and train them to clean your house to your satisfaction."
        },
        {
            question: "How Long Does A Typical Cleaning Service Take?",
            answer: "A standard-size home takes about three hours to clean. Your home may take more or less depending on its size and which services you request."
        },
        {
            question: "What Is Deep Cleaning, And Why Is It Necessary?",
            answer: "Deep cleaning is when our house cleaners scrub your house from top to bottom. We leave nothing undone. This level of cleaning is required to maintain a clean, healthy environment for your family"
        },
        {
            question: "How Often Should I Get My Home Deep Cleaned?",
            answer: "We recommend requesting deep cleaning services once or twice a year to ensure your home is as clean as possible."
        },


        {
            category: "Deep cleaning"
        },
        {
            question: "What Is A Deep House Cleaning Service Exactly?",
            answer: "A deep house cleaning service is a comprehensive and thorough cleaning process that goes beyond regular cleaning tasks. It typically includes cleaning and sanitizing high-touch surfaces, detailed cleaning of kitchen appliances, thorough bathroom disinfection, dusting and wiping of baseboards, blinds, and light fixtures, deep carpet cleaning, and more. The goal is to address neglected areas and remove built-up dirt, grime, and allergens to leave your home exceptionally clean and refreshed."
        },
        {
            question: "How Long Does A Deep House Cleaning Service Take?",
            answer: "The duration of a deep house cleaning service can vary depending on factors such as the size of your home, its current cleanliness level, and the specific services requested. On average, a deep cleaning can take anywhere from several hours to a full day for larger homes. Our professional cleaning team will provide you with a more accurate time estimate after assessing your home's needs during an initial consultation."
        },
        {
            question: "How Often Should I Schedule A Deep House Cleaning Service?",
            answer: "The frequency of deep house cleaning services depends on your individual needs and lifestyle. For most homes, deep cleaning on a quarterly or semi-annual basis is sufficient to maintain a high level of cleanliness. However, homes with high traffic, pets, or specific cleanliness standards may benefit from more frequent deep cleanings. Our team can help you determine an appropriate schedule tailored to your requirements during the consultation."
        },

        {
            category: "Carpet Cleaning"
        },
        {
            question: "How Often Should I Have My Carpets Cleaned",
            answer: "When it comes to maintaining a clean and healthy home, carpet cleaning plays a crucial role. Regular carpet cleaning not only enhances the appearance of your space but also improves indoor air quality by eliminating dust, allergens, and pollutants. However, many homeowners often wonder, 'How often should I get my carpets cleaned?' In this comprehensive guide, we will answer that question and provide you with essential insights to help you keep your carpets in pristine condition."
        },
        {
            question: "What Can I Do To Keep My Carpets Cleaner Longer?",
            answer: "Keeping your home clean and fresh is a top priority for many of us. One area that often requires special attention is our carpets. With the constant foot traffic and daily activities, dirt and hair can easily accumulate, leaving your carpets looking dull and uninviting. However, with a regular cleaning routine that includes monthly vacuuming and shampooing, you can maintain a clean and vibrant carpet that will stand the test of time."
        },
        {
            question: "How Much Does Rug Cleaning Cost?",
            answer: "We understand the importance of providing exceptional service at a reasonable cost. That's why we have revolutionized the rug cleaning industry by introducing hourly pricing instead of traditional square foot or room size rates. With our customer-centric approach, no matter the size or dimensions of your rug, our services are always affordable!"
        },
        {
            question: "How Do You Clean A Dirty Carpet?",
            answer: "When it comes to tackling dirt, stains, and stubborn pet hair on your carpets, you deserve nothing but the best. While vacuum cleaners can help to some extent, they often fall short of providing a truly deep and thorough clean. That's where the expertise of professional carpet cleaning services in Seattle comes in. By availing their specialized equipment and employing a meticulous steam cleaning process, these professionals can ensure that your carpets are left immaculately clean, free from dirt, stains, and pet hair."
        },
        {
            question: "How Do You Clean The Carpet To Make It Look New?",
            answer: "Carpet cleaning may be a challenging task, but fear not! With the right techniques and tools, you can transform your carpets and make them look as good as new. By following these expert tips, you'll be able to achieve a deep clean that removes dirt, dust, and debris, leaving your carpets fresh, spotless, and inviting."
        },
        {
            question: "How Do You Clean Upholstery That Cannot Be Washed?",
            answer: "Is your beloved couch longing for a refreshing makeover, but alas, it cannot be washed? Worry not! We have a trove of ingenious techniques to revive your upholstery and infuse it with a delightful fragrance. Discover the hidden treasures of upholstery maintenance and unlock the key to a fresh and clean seating experience."
        },
        {
            question: "How Do You Clean An Area Rug?",
            answer: "Maintaining the cleanliness of your area rug is crucial not only for aesthetic purposes but also for promoting a healthy living environment. Over time, dust, dirt, allergens, and even pet dander can accumulate in the fibers of the rug, causing potential health risks and compromising the rug's appearance. Regular cleaning not only removes these contaminants but also helps prolong the lifespan of the rug."
        }
    ]

    return (
        <div className='flex flex-col flex-1 items-center'>
            <Box className='flex flex-col my-3 mx-5 w-2/5'>

            {FAQ.map((faq,i)  => {
                if ("category" in faq) {
                    return <h2 key={i} className='mt-10 mb-3'>{ faq.category }</h2>
                } else {
                    return <AccordionComponent 
                    question={faq.question} 
                    answer={faq.answer}
                    key={i}
                    ind={i}
                    />     
                }      
            })}
            </Box>
            


        </div >
    )
}

export default FAQPage