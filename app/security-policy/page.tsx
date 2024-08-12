import Link from "next/link";
import Image from "next/legacy/image";

export default function SecurityPolicy() {
    return(
      
    <main className="px-5 sm:px-10 md:px-20 mb-20  text-white">
        <div className="imageWrapper">
          <Image src="/assets/lip.png" alt="lip.png Image" width={500} height={500} />
          </div>
        <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center mb-5">The security statement for Abisentry Technology
        </h1>
      <div className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10"> Protection from Data Loss, Corruption

      <div className="text-white">
  <p className="mt-4 text-lg lg:text-base xl:text-lg"> </p>
  <ul className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">
    <li>All databases are kept separate and dedicated to preventing corruption and overlap. We have multiple layers of logic that segregate user accounts from each other.</li>
    <li>All data is encrypted at rest.</li>
    <li>Account data is mirrored and regularly backed up off-site.</li>
  </ul>
</div>

    </div>
      <div className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10">Application Level Security
      <ul className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">
    <li>All login pages pass data via TLS 1.3.</li>
    <li>The entire Abisentry Technology application is encrypted with TLS 1.3.</li>
    <li>Login pages and logins via the Abisentry Technology API have brute force protection.</li>
    <li>We perform regular external security penetration tests throughout the year using different vendors. The tests involve high-level server penetration tests, in-depth testing for vulnerabilities inside the application, and social engineering drills.</li>
   </ul>
      </div>
      <div className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10">Internal IT Security
      <ul className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">
    <li>We have a dedicated internal security team that constantly monitors our environment for vulnerabilities. They perform penetration testing and social engineering exercises on our environment and our employees.</li>
   </ul>
      </div>
      <div className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10" >Internal Protocol and Education
      <ul className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">
    <li>We continuously train employees on best security practices, including how to identify social engineering, phishing scams, and hackers. </li>
    <li>Employees on teams that have access to customer data (such as tech support and our engineers) undergo criminal history and background checks prior to employment.</li>
    <li>All employees sign a Privacy Safeguard Agreement outlining their responsibility in protecting customer data.</li>
    <li>In order to protect our company from a variety of different losses, Abisentry Technology has established a comprehensive insurance program. Coverage includes but is not exclusive to: coverage for cyber incidents, data privacy incidents (including regulatory expenses), general error and omission liability coverage, excess cyber liability coverage, property and business interruption coverage, as well as international commercial general liability coverage.</li>
   </ul>
      </div>
      <div className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10">SOC II Compliant PCI DSS Certification
      <ul className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">
    <li> Abisentry Technology, our credit card processor, and all of our key vendors use security measures to protect your information both during any transaction and after it is complete. Our vendors are certified as compliant with card association security initiatives. We also perform annual SOC II audits.</li>
    <li>We provide our SOC 2 Type 2 and PCI DSS Reports upon request.</li>
   </ul>
      </div>
      <div className="text-4xl sm:text-6xl lg:text-5xl text-center mb-10"> Protecting Ourselves Against You
      <ul className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">
    <li>We take measures to secure ourselves, but if your computer gets compromised and someone gets into your Abisentry Technology account, that’s not good for anyone.</li>
    <li>We monitor and will automatically suspend accounts for signs of irregular or suspicious login activity.</li>
    <li>Certain changes to your account, such as to your password, will trigger email notifications to the account owner.</li>
   </ul>
      </div>
      <div   className="left-aligned-list mt-4 text-lg lg:text-base xl:text-lg">If you have any questions or comments, or if you have a concern about the way in which we have handled any security matter, please send an email to info@abisentry.com .
     </div>
       <Link href="/" className="text-blue-500 hover:underline">Home</Link>
    </main>
    );

}