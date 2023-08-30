import React from "react";

export default function Info() {
    return (
        <section className="relative z-10 py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Quality Vans</h3>
                        <p className="text-gray-600">
                            We provide a diverse range of quality vans to cater to your travel needs.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                        <p className="text-gray-600">
                            Our team of experts is here to provide you with excellent support and guidance.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Unforgettable Journeys</h3>
                        <p className="text-gray-600">
                            Create unforgettable memories with our comfortable and reliable vans.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Customize Your Trip</h3>
                        <p className="text-gray-600">
                            Tailor your adventure with various van types, amenities, and travel plans.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Flexible Booking</h3>
                        <p className="text-gray-600">
                            Book your van for the dates that suit you best, whether it's a weekend getaway or a long journey.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Safe and Reliable</h3>
                        <p className="text-gray-600">
                            Our vans undergo rigorous safety checks to ensure a worry-free travel experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
