import React from 'react'
import { Box } from '@mui/material'

import AccordionComponent from '../components/AccordionComponent';
import BackgroundSprinkle from '../../src/assets/sprinkle-background.svg';


const FAQPage = () => {

    const FAQ = [
        {
            category: "General"
        },
        {
            question: "What Types Of Cleaning Services Does Pure Housekeeping Offer?",
            answer: "Pure Housekeeping offers a comprehensive array of solutions tailored to meet your cleaning needs, including but not limited to recurring cleanings (AT A DISCOUNT!), one-time cleanings, deep cleanings, move in/out cleanings. We also offer extra services for an added fee: oven cleaning, fridge cleaning, inside cabinet cleanings, and inside window cleanings."
        },
        {
            question: "What Is Included In A Standard House Cleaning Services?",
            answer: "Our standard house cleaning services are customized to meet your needs. They typically include vacuuming, dusting, mopping and wiping down superficial surfaces, bathroom and kitchen cleaning, and other essential services."
        },
        {
            question: "Do I Need To Provide Cleaning Supplies For The Service?",
            answer: "Our house cleaners are provided with eco-friendly cleaning products and necessary tools to ensure efficient cleaning each time. You don’t have to supply anything, unless you prefer us to work with a specific product that your household uses."
        },
        // {
        //     question: "Are Your Cleaners Trained And Insured?",
        //     answer: "We carry insurance for all our cleaners and train them to clean your house to your satisfaction."
        // },
        {
            question: "How Long Does A Typical Cleaning Service Take?",
            answer: "It is difficult to measure a time for our services without seeing your house first and what type of services you need, we can give you a close estimation if you fill out our estimate form on our home page. Our cleaners are very skilled and try to clean as fast as possible without sacrificing quality. Our calculations are usually accurate through our online estimate request. First time cleanings usually take longer than our recurring services, once we have visited your home after the first time we have procedures in place that allow us to get in and out of your house."
        },
        {
            category: "Recurring Housekeeping"
        },
        {
            question: "How much does Recurring Home Cleaning Cost?",
            answer: "The cost of recurring cleaning services vary and without seeing your house first it depends on several factors. We can give you a close estimation if you fill out our estimate form on our home page. Remember that we offer discounts up to 24% OFF for recurring services after your initial clean. Our cleaners are very skilled and try to clean as fast as possible without sacrificing quality. Our calculations are usually accurate through our online estimate request. First time cleanings usually take longer than our recurring services, once we have visited your home after the first time we have procedures in place that allow us to get in and out of your house."
        },
        {
            question: "Are Your Cleaning Products Safe For My Family And Pets?",
            answer: "Our house cleaners are provided with eco-friendly cleaning products and necessary tools to ensure efficient cleaning each time. We take your family's safety with upmost care and we want to know if you have any concerns so we can accomodate to you and your family's needs."
        },
        {
            question: "What Measures Do You Take To Ensure The Security And Trustworthiness Of Your Cleaning Staff?",
            answer: "We understand the importance of trust when inviting someone into your home. Our cleaning staff undergoes a rigorous selection process. They are trained professionals who are dedicated to maintaining the highest level of professionalism and integrity. We take our reputation very seriously and we want you to feel safe having our cleaners in your home while serviving your needs."//Additionally, we are fully bonded and insured to provide added peace of mind, ensuring that you and your home are protected throughout our service engagements."
        },
        {
            category: "Deep Cleaning"
        },
        {
            question: "What Is Deep Cleaning, And Why Is It Necessary?",
            answer: "Deep cleaning involves a thorough process of removing dirt, grime, and germs from all surfaces in your home, including hard-to-reach areas. It is necessary for your family's health as it helps eliminate allergens, dust mites, and harmful pathogens that can cause respiratory issues and allergies. By maintaining a clean and sanitized environment, deep cleaning reduces the risk of illness transmission and ensures a safer and more comfortable living space for your loved ones."
        },
        {
            question: "How Often Should I Get My Home Deep Cleaned?",
            answer: "The frequency of deep cleaning depends on several factors, including the size of your home, the number of occupants, and your lifestyle. As a general guideline, we recommend to deep clean your home at least once every six to twelve months. However, homes with pets, young children, or individuals with allergies may require more frequent deep cleaning, perhaps every three to six months. Additionally, high-traffic areas and commonly used spaces like kitchens and bathrooms may benefit from more frequent deep cleaning sessions. Ultimately, the best frequency for deep cleaning depends on your specific circumstances and cleaning needs."
        },
        {
            category: "Move In/Out Cleaning"
        },
        {
            question: "How much does Move In/Out Cleaning Cost?",
            answer: "The cost of move in/out cleaning services vary and without seeing your house first it depends on several factors. We can give you a close estimation if you fill out our estimate form on our home page. Usually we work faster when the living space is empty, but we do a more thorough cleaning than a standard clean so we do take slightly longer. Our cleaners are very skilled and try to clean as fast as possible without sacrificing quality. Our calculations are usually accurate through our online estimate request. First time cleanings usually take longer than our recurring services."
        },
        {
            question: "What Does A Standard Move In/Out Cleaning Service Include?",
            answer: "A standard move-in/move-out cleaning service usually covers a thorough cleaning of the entire inside of the property. This includes cleaning and sanitizing kitchen appliances, countertops, and cabinets; scrubbing and disinfecting bathrooms; dusting and wiping down all surfaces, including baseboards; vacuuming and mopping floors; and removing any trash or debris."
        },
        {
            question: "How Far In Advance Should I Schedule Move-In/Move-Out Cleaning Services?",
            answer: "We advise you to schedule move-in/move-out cleaning services as far in advance as possible, ideally at least a week or two before your planned move-in or move-out date. This advance scheduling allows us to accommodate your preferred date and time, ensuring that we have availability in our schedule. Additionally, booking early gives you peace of mind knowing that your cleaning needs are taken care of, allowing you to focus on other aspects of your move without last-minute stress. If you're moving during peak seasons or are in a high-demand area, consider scheduling even earlier to secure your preferred time slot."
        },
    ]

    return (
        <Box className='flex flex-col flex-1 items-center' sx={{
            backgroundImage: `url(${BackgroundSprinkle})`,
            backgroundRepeat: 'repeat',
            //backgroundAttachment: 'fixed',
        }}>
            <Box className='flex flex-col mt-3 mb-12 mx-5 w-3/5'>

                {FAQ.map((faq, i) => {
                    if ("category" in faq) {
                        return <Box key={i} className=''><h2 className='mt-10 mb-3 bg-white inline-block opacity-80 rounded-full'>{faq.category}</h2></Box>
                    } else {
                        return <AccordionComponent
                            align='left'
                            question={faq.question}
                            answer={faq.answer}
                            key={i}
                            ind={i}
                        />
                    }
                })}
            </Box>



        </Box >
    )
}

export default FAQPage