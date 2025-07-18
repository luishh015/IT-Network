import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, CheckCircle, X } from 'lucide-react';
import { mockAppointmentSlots } from './MockData';

const AppointmentCalendar = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedDate, setSelectedDate] = useState('2025-01-20');
  const [selectedTime, setSelectedTime] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const availableDates = [...new Set(mockAppointmentSlots.map(slot => slot.date))];
  const availableTimesForDate = mockAppointmentSlots.filter(
    slot => slot.date === selectedDate && slot.available
  );

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...bookingData, date: selectedDate, time: selectedTime });
    alert('Termin erfolgreich gebucht! Wir melden uns bei Ihnen zurück.');
    setShowBookingForm(false);
    setSelectedTime(null);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="calendar" className="py-20 bg-bg-page">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="display-md text-text-primary mb-6">
            Terminbuchung
          </h2>
          <p className="body-xl text-text-secondary max-w-2xl mx-auto">
            Buchen Sie Ihren kostenlosen IT-Beratungstermin. 
            Wir nehmen uns Zeit für Ihre individuellen Anforderungen.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="design-card"
            >
              <div className="flex items-center mb-6">
                <Calendar className="text-brand-green mr-3" size={24} />
                <h3 className="heading-3">Datum auswählen</h3>
              </div>

              <div className="space-y-3">
                {availableDates.map((date) => (
                  <motion.button
                    key={date}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDate(date)}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      selectedDate === date
                        ? 'border-brand-green bg-green-50 text-brand-green'
                        : 'border-border-light bg-white text-text-primary hover:border-brand-green'
                    }`}
                  >
                    {formatDate(date)}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Time Slots Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="design-card"
            >
              <div className="flex items-center mb-6">
                <Clock className="text-brand-green mr-3" size={24} />
                <h3 className="heading-3">Uhrzeit auswählen</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {availableTimesForDate.map((slot) => (
                  <motion.button
                    key={slot.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedTime(slot.time);
                      setShowBookingForm(true);
                    }}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedTime === slot.time
                        ? 'border-brand-green bg-green-50 text-brand-green'
                        : 'border-border-light bg-white text-text-primary hover:border-brand-green'
                    }`}
                  >
                    {slot.time}
                  </motion.button>
                ))}
              </div>

              {availableTimesForDate.length === 0 && (
                <p className="text-text-muted text-center py-8">
                  Keine verfügbaren Termine für dieses Datum
                </p>
              )}
            </motion.div>
          </div>

          {/* Booking Form Modal */}
          {showBookingForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="heading-3">Termin bestätigen</h3>
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="btn-icon"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-brand-green mb-2">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="font-medium">Gewählter Termin</span>
                  </div>
                  <p className="text-text-primary">
                    {formatDate(selectedDate)} um {selectedTime} Uhr
                  </p>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      value={bookingData.company}
                      onChange={(e) => setBookingData({...bookingData, company: e.target.value})}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Ihre Nachricht
                    </label>
                    <textarea
                      rows="3"
                      value={bookingData.message}
                      onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                      placeholder="Beschreiben Sie kurz Ihre IT-Herausforderung..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="btn-secondary flex-1"
                    >
                      Abbrechen
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex-1"
                    >
                      Termin buchen
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentCalendar;