"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Process",          id: "process"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Unicorn Plumbing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Plumbing Done Right. The First Time."
      description="Fast, reliable, and high-end plumbing services for homes that expect more. Precision work with a focus on respect and clarity."
      buttons={[
        {
          text: "Book a Consultation",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bathtub-with-faucet_1203-1500.jpg",          imageAlt: "Luxury Bathroom"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",          imageAlt: "Precision Plumbing"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-bathroom-wall-background-with-towel-rack_53876-145203.jpg",          imageAlt: "Clean Interior"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plumber-repair-experienced-attentive-middleaged-man-examining-bottom-kitchen-sink_259150-58266.jpg",          imageAlt: "Professional Service"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-kitchen-sink-faucet-close-up_58702-1744.jpg",          imageAlt: "Gold Fixtures"},
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Not Your Average Plumber"
      buttons={[
        {
          text: "Learn More"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "No Short-cuts",          "No Mess Left Behind",          "No Hidden Costs",          "No Tardiness",          "No Guesswork"],
      }}
      positiveCard={{
        items: [
          "Precision Workmanship",          "Respect for Your Home",          "Clear, Transparent Pricing",          "Reliable Timing",          "Licensed & Insured"],
      }}
      title="The Unicorn Difference"
      description="We treat your home with the care it deserves, ensuring every job is finished to perfection without compromise."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "s1",          name: "Emergency Repairs",          price: "Request Pricing",          imageSrc: "http://img.b2bpic.net/free-photo/man-rinsing-dish-sponge-running-water-daily-home-hygiene_169016-69431.jpg"},
        {
          id: "s2",          name: "Leak Detection",          price: "Request Pricing",          imageSrc: "http://img.b2bpic.net/high-angle-still-life-assortment-pvc_23-2149062953.jpg"},
        {
          id: "s3",          name: "Drain Unblocking",          price: "Request Pricing",          imageSrc: "http://img.b2bpic.net/free-photo/suitcase-with-necktie-father-s-day_23-2147631315.jpg"},
        {
          id: "s4",          name: "Boiler Repairs",          price: "Request Pricing",          imageSrc: "http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990731.jpg"},
        {
          id: "s5",          name: "Bathroom Installations",          price: "Request Pricing",          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg"},
        {
          id: "s6",          name: "General Maintenance",          price: "Request Pricing",          imageSrc: "http://img.b2bpic.net/free-photo/3d-geometric-abstract-background_1048-13139.jpg"},
      ]}
      title="Expert Plumbing Services"
      description="Comprehensive solutions tailored for high-end residential needs."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="How It Works"
      tag="4-Step Process"
      metrics={[
        {
          id: "p1",          value: "1.",          description: "Get in Touch via call or form."},
        {
          id: "p2",          value: "2.",          description: "Fast Assessment and diagnosis."},
        {
          id: "p3",          value: "3.",          description: "Upfront, honest pricing."},
        {
          id: "p4",          value: "4.",          description: "Flawless, clean execution."},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="standards" data-section="standards">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah Jenkins",          role: "Homeowner",          company: "Westside",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/faucet-water-tap_1203-3196.jpg"},
        {
          id: "t2",          name: "Mark Thornton",          role: "Homeowner",          company: "Highlands",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-still-life-assortment-pvc_23-2149062955.jpg"},
        {
          id: "t3",          name: "Elena Rodriguez",          role: "Homeowner",          company: "Northgate",          rating: 5,
          imageSrc: "http://img.b2bpic.net/closeup-shot-stainless-silver-water-tap_181624-48218.jpg"},
        {
          id: "t4",          name: "David Chen",          role: "Homeowner",          company: "River Valley",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-moving-signing-paper_1157-35362.jpg"},
        {
          id: "t5",          name: "Laura Patterson",          role: "Homeowner",          company: "Downtown",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/tools-materials-sanitary-works_93675-132627.jpg"},
      ]}
      kpiItems={[
        {
          value: "100%",          label: "Fully Insured"},
        {
          value: "Same-Day",          label: "Availability"},
        {
          value: "Certified",          label: "Experts"},
      ]}
      title="Built on Standards, Not Shortcuts"
      description="We are dedicated to providing the highest quality plumbing services in the industry. Fully qualified, insured, and dependable."
    />
  </div>

  <div id="area" data-section="area">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Service Coverage",          content: "We proudly serve the entire greater metro area."},
        {
          id: "f2",          title: "Response Times",          content: "Same-day appointments are available for all urgent repairs."},
        {
          id: "f3",          title: "Insurance",          content: "Every technician is fully insured and certified for your peace of mind."},
        {
          id: "f4",          title: "Emergency Availability",          content: "24/7 emergency support is available for burst pipes and urgent leaks."},
        {
          id: "f5",          title: "Quality Guarantee",          content: "All repairs come with our signature 'first-time fixed' performance guarantee."},
      ]}
      sideTitle="Serving Your Area"
      sideDescription="We provide premium plumbing services across the region with fast, responsive dispatch."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Need a Plumber You Can Actually Rely On?"
      description="We're ready when you are. Get a quote or book your visit today."
      imageSrc="http://img.b2bpic.net/free-photo/pleased-young-male-builder-wearing-uniform-safety-helmet-points-camera-pink_141793-74591.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Unicorn Plumbing"
      leftLink={{
        text: "Fully insured & certified",        href: "#"}},
      rightLink={{
        text: "Contact Us: 555-0199",        href: "tel:5550199"}},
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}