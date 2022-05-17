<!-- adblocker starts here -->

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.1.2/dist/sweetalert2.all.min.js"></script>
        <script>
            async function detectAdBlock() {
    let adBlockEnabled = false
    const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    try {
        await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
        
    } catch (e) {
        // alert("alert");
        adBlockEnabled = true;     

    } finally {
        // console.log(`AdBlock Enabled: ${adBlockEnabled}`)
        // alert("alert");
    }
    if (adBlockEnabled==true){
        //   alert("adblocker is enabled ")
        Swal.fire({
    icon: 'error',
    title: 'Oops... </br> Ad-Blocked',
    text: 'If you enjoy our resources, please support our site by disabling 🚫 your adblocker We depend on Advertisements 💰',
    //   footer: '<a href="">Why do I have this issue?</a>'
    })
    }
    }
    detectAdBlock()
        </script>

    <!-- adblocker checker ends -->
