export default function Agreements() {
  return (
    <section className="text-center mt-10">
      <p className="text-gray-600">
        By using this site, you agree to our{' '}
        <a href="/terms" className="text-blue-500 hover:underline">
          Terms
        </a>{' '}
        and{' '}
        <a href="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}
