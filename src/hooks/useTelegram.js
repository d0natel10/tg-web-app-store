const tg = window.Telegram.WebApp;

const onClose = () => {
    tg.close();
  }

  const onToggleButton = () => {
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
  };

export function useTelegram(){
    return{
         onClose,
         onToggleButton, 
         tg,
         user: tg.initDataUnsafe?.user
    }
}