<template>
  <div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1432488057327276');
            fbq('track', 'PageView');
          `
        }
      ],
      noscript: [
        {
          innerHTML: `
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1432488057327276&ev=PageView&noscript=1"
            />
          `
        }
      ]
    };
  }
};
</script>