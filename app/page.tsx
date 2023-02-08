import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              &ldquo;Explain quantum computing in simple terms&ldquo;
            </p>
            <p className="infoText">
              &ldquo;Got any creative ideas for a 10 year old’s birthday?&ldquo;
            </p>
            <p className="infoText">
              &ldquo;How do I make an HTTP request in Javascript?&ldquo;
            </p>
            <p></p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              &ldquo;Remembers what user said earlier in the conversation&ldquo;
            </p>
            <p className="infoText">
              &ldquo;Allows user to provide follow-up corrections&ldquo;
            </p>
            <p className="infoText">
              &ldquo;Trained to decline inappropriate requests&ldquo;
            </p>
            <p></p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              &ldquo;May occasionally generate incorrect information&ldquo;
            </p>
            <p className="infoText">
              &ldquo;May occasionally produce harmful instructions or biased
              content&ldquo;
            </p>
            <p className="infoText">
              &ldquo;Limited knowledge of world and events after 2021&ldquo;
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
