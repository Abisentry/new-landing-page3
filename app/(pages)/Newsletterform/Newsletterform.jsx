import Link from "next/link";
import Image from "next/legacy/image";

export default function Newsletterform() {
  return (
    <div>
      <div
        id="sf3zfc088b24cc6145a56821337dd5c754feaf534898081b31cafa46a10222decad6"
        data-type="signupform"
        style={{ opacity: 1 }}
      >
        <div id="customForm">
          <div
            name="SIGNUP_BODY"
            style={{
              width: '300px',
              height: '380px',
              position: 'relative',
              margin: 'auto',
              backgroundColor: 'rgb(255, 255, 255)',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_41.png"
              style={{ width: '100%', height: '100%', position: 'relative' }}
              alt="Signup Background"
            />
            <form
              method="POST"
              id="zcampaignOptinForm"
              action="https://zcsub-cmpzourl.maillist-manage.com/weboptin.zc"
              target="_zcSignup"
            >
              <div style={{ textAlign: 'center', width: '100%', position: 'absolute', zIndex: 2, bottom: '75px' }}>
                <div style={{ fontSize: '22px', fontWeight: 500, color: 'rgb(106, 73, 162)' }}>Stay up-to-date!</div>
                <div style={{ fontSize: '18px', color: 'rgb(72, 72, 72)', margin: '10px 0' }}>
                  Get insights and tips from experts
                </div>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="CONTACT_EMAIL"
                  style={{
                    border: '1px solid rgb(106, 73, 162)',
                    backgroundColor: 'rgb(240, 240, 240)',
                    width: '100%',
                    height: '35px',
                    padding: '5px',
                    boxSizing: 'border-box',
                    color: 'rgb(136, 136, 136)',
                    fontFamily: 'Poppins, Arial',
                    fontSize: '12px',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    borderRadius: '0px',
                    backgroundColor: 'rgb(106, 73, 162)',
                    width: '100%',
                    height: '35px',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer',
                    outline: 'none',
                    fontFamily: 'Arial',
                    fontSize: '14px',
                    marginTop: '10px',
                  }}
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
          <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        </div>
      </div>
    </div>
    
  );
}
