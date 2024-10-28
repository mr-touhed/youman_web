import HeadingAnimation from '@/components/HeadingAnimation';
import React from 'react';

const TermsAndConditionPage = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 text-base font-thin space-y-8 mb-16 '>
            <HeadingAnimation>
                            <h2 className='text-4xl font-semibold text-green-700 text-center'>Terms & conditions</h2>
            </HeadingAnimation>

            <section>
                    <h2 className='md:text-3xl text-lg font-semibold  '> 1. Introduction:</h2>
                    <p className='ml-2 text-justify'>Youman (“we,” “us,” or “our”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including the Youman NFC card. Please read this policy carefully to understand our practices regarding your data.
                    </p>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg  font-semibold  '> 2. Information We Collect:</h2>
                    <p className='ml-2'>We may collect and process the following data:</p>
                    <ul className='list-inside list-disc ml-4'>
                        <li>Personal Information: Such as your name, email address, phone number, and address when you sign up for our services.</li>
                        <li>Payment Data: Information required for membership payments or purchases made through our platform.
                        </li>
                        <li>Usage Data: Information about your use of our services, including interactions with our website, login activity, and engagement metrics.</li>
                        <li>Location Data: If permitted, we may collect location data to enhance service delivery.</li>
                    </ul>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 3. How We Use Your Information:</h2>
                    <p className='ml-2'>We use your data for the following purposes:</p>
                    <ul className='list-inside list-disc ml-4'>
                        <li>Service Delivery: To provide you with access to our platform, membership benefits, and community interactions.</li>
                        <li>Improvement of Services: To analyze and enhance our website, products, and user experiences.
                        </li>
                        <li>Marketing Communications: To send promotional offers, newsletters, and other relevant content with your consent.
                        </li>
                        <li>Legal Compliance: To comply with applicable laws, regulations, and legal requests.
                        </li>
                    </ul>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 4. Sharing Your Information:</h2>
            <p className='ml-2'>We may share your information in the following scenarios:
            </p>
            <ul className='list-inside list-disc ml-4'>
                <li>Third-Party Service Providers: To facilitate payment processing, cloud storage, or data analysis.
                </li>
                <li>Business Transactions: In the event of a merger, acquisition, or sale of all or part of our assets.
                </li>
                <li>Legal Obligations: To comply with legal requirements or to protect the rights, safety, and property of Youman, our users, or others.</li>
            </ul>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 5. Data Security:
            </h2>
            <p className='ml-2'>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '>6. Data Retention:
            </h2>
            <p className='ml-2'>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Data may be anonymized and retained for analytics beyond this period.</p>
            </section>

            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 7. Your Rights:
            </h2>
            <p className='ml-2'>You have the following rights concerning your personal information:

            </p>
            <ul className='list-inside list-disc ml-4'>
                <li>Access: Request a copy of your data.

                </li>
                <li>Correction: Request corrections to your data.

                </li>
                <li>Deletion: Request deletion of your personal information, subject to legal or contractual obligations.
                </li>
                <li>Opt-Out: Withdraw consent for marketing communications at any time.</li>
            </ul>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 8. Cookies and Tracking Technologies:</h2>
            <p className='ml-2'>We use cookies and similar technologies to track user activity on our website, improve user experience, and analyze website performance. You can control your cookie settings through your browser.
            </p>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 9. Changes to This Privacy Policy:</h2>
            <p className='ml-2 '>We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this policy periodically to stay informed about how we are protecting your information.

            </p>
            </section>
            <section>
            <h2 className='md:text-3xl text-lg font-semibold  '> 10. Contact Us:
            </h2>
            <p className='ml-2'>If you have any questions about this Privacy Policy, please contact us at: <span className='underline text-green-700'>hello@youman.com.bd</span> or <span className='underline text-green-700'> hello@youman.one</span> 

            </p>
            </section>
        </div>
    );
};

export default TermsAndConditionPage;