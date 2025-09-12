"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const ContactSection = ({section}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Static content without admin panel dependency
  const title = "Let us know what you think!";
  const subtitle = "Get in touch with our team to discuss your project requirements and how we can help bring your vision to life.";
  
  const contact_info = [
    {
      icon: "Mail",
      title: "Email",
      value: "info@corpnix.com",
      color: "text-[#6A61E0]"
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "+91 9820-313-746 / +91 900-443-2433",
      color: "text-[#6A61E0]"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Shop 10B Jabbar Estate, Tunga Village, S.V Road, Powai, Mumbai - 400072",
      color: "text-[#6A61E0]"
    }
  ];
  
  const map_location = {
    title: "Corpnix",
    address: "Shop 10B, Jabbar Estate, Tunga Village, S.V Road, Powai",
    city: "Mumbai - 400072"
  };
  
  const map_embed_url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.584018322807!2d72.88974711858629!3d19.11961840015413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzEwLjYiTiA3MsKwNTMnMjMuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Mail': return <Mail className="w-6 h-6" />;
      case 'Phone': return <Phone className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      default: return <Mail className="w-6 h-6" />;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email via the API route
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Also save to Supabase as backup
      try {
        console.log('Attempting to save to Supabase...');
        console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) + '...');
        
        const submissionData = {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString()
        };

        console.log('Data to insert:', submissionData);
        
        const { data, error } = await supabase
          .from('contact_submissions')
          .insert([submissionData]);

        if (error) {
          console.error('Supabase insert failed:', error);
          console.error('Error code:', error.code);
          console.error('Error message:', error.message);
          console.error('Error details:', error.details);
          console.error('Error hint:', error.hint);
          
          // If table doesn't exist, show specific error
          if (error.code === '42P01') {
            console.error('Table contact_submissions does not exist');
          }
          
          setSubmitStatus('warning');
        } else {
          console.log('Successfully saved to Supabase:', data);
          setSubmitStatus('success');
        }
      } catch (supabaseError) {
        console.error('Supabase connection error:', supabaseError);
        setSubmitStatus('warning');
      }

      // Don't override warning status if already set
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contact_info.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <div className={`${info.color}`}>
                    {getIcon(info.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{info.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{info.value}</p>
                </div>
              </div>
            
            </div>
            
          ))}
        </div>
          <div className='flex justify-center'>
            <hr className='w-3/4 h-[1px] bg-gray-300 mb-10'/>
          </div>
        <div className="flex justify-center items-center relative text-[#6A61E0]">
            <Image className="relative" src="/Vector_1.png" alt="map" width={120} height={120}/>
            <p className="absolute font-semibold -top-4 text-2xl rounded-full w-9 h-9 flex justify-center items-center bg-white">or</p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          {/* Map Section */}
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Find us</h3>
              <div className="w-30 h-1 bg-[#6A61E0] rounded-full"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
              <iframe
                src={map_embed_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Corpnix Location"
              ></iframe>
              
              <div className="absolute top-4 right-4 bg-gray-600 backdrop-blur-sm rounded-lg p-4 w-46">
                <h4 className="font-bold text-orange-500 mb-1">{map_location.title}</h4>
                <p className="text-sm text-white">{map_location.address}</p>
                <p className="text-sm text-white">{map_location.city}</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </div>
            )}
            
            {submitStatus === 'warning' && (
              <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                <p className="font-medium">Message sent via email!</p>
                <p className="text-sm">Note: There was an issue saving to our database, but your email was sent successfully. We'll still get back to you.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-medium">Something went wrong!</p>
                <p className="text-sm">Please try again later or contact us directly.</p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="text-black w-full px-4 py-3 placeholder-slate-600 border border-slate-300 rounded-lg focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="text-black w-full px-4 py-3 border placeholder-slate-600 border-slate-300 rounded-lg focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject"
                  required
                  className="text-black w-full px-4 py-3 border placeholder-slate-600 border-slate-300 rounded-lg focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter your message"
                  required
                  className="text-black w-full px-4 py-3 placeholder-slate-600 border border-slate-300 rounded-lg focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-xs mx-auto bg-white text-black py-4 px-8 rounded-full font-semibold duration-500 ease-out border-1 outline-0 border-black flex items-center justify-center gap-2 group relative overflow-hidden hover:border-1 hover:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute left-0 top-0 h-full w-16 bg-[#35327d] rounded-full transform scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out origin-left"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;