import ContactSection from '@/components/sections/contactus';
import FAQsSection from '@/components/sections/faqs';

export default function Contact() {
  return (
    <>
      <div className='py-20'>
        <ContactSection />
        <FAQsSection />
      </div>
    </>
  );
}