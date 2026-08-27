export default function FloatingContact() {
  return (
    <div
      className="
        fixed bottom-5 right-4 z-[100]
        flex flex-col items-center gap-3

        sm:bottom-7 sm:right-6 sm:gap-4
        lg:bottom-8 lg:right-8
      "
    >
      {/* Email */}
      <a
        href="mailto:laylaouda@gmail.com"
        aria-label="Email Layla"
        className="
          group
          flex h-12 w-12
          items-center justify-center
          rounded-full
          border border-[#E6DDD8]
          bg-[#DDC0B4]
          text-white

          shadow-[0_6px_22px_rgba(0,0,0,0.12)]

          transition-all duration-300
          hover:-translate-y-1
          hover:scale-105

          sm:h-14 sm:w-14
          lg:h-[58px] lg:w-[58px]
        "
      >
        {/* Filled Email Icon */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[22px] w-[22px] fill-current sm:h-[25px] sm:w-[25px]"
          aria-hidden="true"
        >
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+971509204222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Layla"
        className="
          group
          flex h-12 w-12
          items-center justify-center
          rounded-full
          border border-[#DDC0B4]
          bg-[#E6DDD8]
          text-[#8F6859]

          shadow-[0_6px_22px_rgba(0,0,0,0.12)]

          transition-all duration-300
          hover:-translate-y-1
          hover:scale-105

          sm:h-14 sm:w-14
          lg:h-[58px] lg:w-[58px]
        "
      >
        {/* Filled WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[27px] w-[27px] fill-current sm:h-[30px] sm:w-[30px]"
          aria-hidden="true"
        >
          <path d="M16.02 3C8.83 3 3 8.73 3 15.8c0 2.49.73 4.91 2.1 6.98L3.02 30l7.45-2.03a13.12 13.12 0 0 0 5.54 1.22h.01C23.2 29.19 29 23.45 29 16.39 29 9.32 23.2 3 16.02 3Zm0 23.99a10.9 10.9 0 0 1-5.23-1.33l-.38-.22-4.42 1.21 1.18-4.23-.25-.4a10.59 10.59 0 0 1-1.65-5.7c0-5.91 4.83-10.72 10.76-10.72 5.93 0 10.75 4.81 10.75 10.72 0 5.91-4.83 10.67-10.76 10.67Zm5.9-8.02c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.41-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.22 2.28 3.48 5.53 4.88.77.33 1.38.53 1.85.68.78.25 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.53.27-.76.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
        </svg>
      </a>
    </div>
  );
}