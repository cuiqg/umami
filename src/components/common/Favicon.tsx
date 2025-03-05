import { GROUPED_DOMAINS } from '@/lib/constants';

function getHostName(url: string) {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?([^:/\n?=]+)/im);
  return match && match.length > 1 ? match[1] : null;
}

export function Favicon({ domain, ...props }) {
  if (process.env.privateMode) {
    return null;
  }

  const hostName = domain ? getHostName(domain) : null;
  const src = hostName
    ? `https://favicon.im/${GROUPED_DOMAINS[hostName]?.domain || hostName}?larger=true`
    : null;

  return hostName ? <img src={src} width={24} height={24} alt="" {...props} /> : null;
}

export default Favicon;
