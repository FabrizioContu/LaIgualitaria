export default function MapSection() {
  <div className="mt-16">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      <span className="gradient-text">Mapa de proveïdors</span>
    </h2>
    <p className="text-gray-600 mb-6">
      Els nostres proveïdors estan distribuïts principalment per Catalunya,
      minimitzant així la petjada ecològica del transport.
    </p>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495142.2744542317!2d0.721907574645385!3d41.84141008942192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45bac24b938bf%3A0x5200e7452f9ef790!2sCatalu%C3%B1a!5e0!3m2!1ses!2ses!4v1716305982126!5m2!1ses!2ses"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>;
}
