function toast ({
    title = '',
    message = '', 
    type = '', 
    duration = 3000,
}) {
    const main = document.getElementById('toast')
    if (main) {

        

        const icons ={
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-radiation',
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        const toast = document.createElement('div')
        
        const autoRemove = setTimeout(function () {
            main.removeChild(toast)
        }, duration);
        toast.onclick = function (e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemove)
            }
        };

        toast.style.animation = `slideInLeft ease  1s, fadeOut linear 2s ${delay}s forwards`
        toast.classList.add('toast', `toast--${type}`)
        toast.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
    </div>

    <div class="toast__body">
       <h3 class="toast__title">${title}</h3>

        <p class="toast__message">${message}</p>
    </div>

    <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
    </div>
        `
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title:'Success',
        message:'congratulation! you can sign in to the account you created',
        type:'success',
        duration:'3000',
    })
}

function showErrorToast() {
    toast({
        title:'Error',
        message:'you are violating the terms of our privacy policy',
        type:'error',
        duration:'3000',
    })
}

function showWarningToast() {
    toast({
        title:'Warning',
        message:'All your information will be stored as completely secure information by our system',
        type:'warning',
        duration:'3000',
    })
}

function showInfoToast() {
    toast({
        title:'Info',
        message:'you need add mor information for my CV soon',
        type:'info',
        duration:'3000',
    })
}