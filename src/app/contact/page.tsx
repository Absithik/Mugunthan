import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
    title: "Contact Best Packers and Movers in Salem | Get a Free Quote",
    description: "Contact Mugunthan Packers & Movers in Salem for a free shifting quote. Available 24/7 for house shifting, office moving, and vehicle transport queries.",
    keywords: ["Contact Packers Salem", "Mugunthan Packers Phone", "Salem Movers Contact", "Free Shifting Quote Salem"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/contact',
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
