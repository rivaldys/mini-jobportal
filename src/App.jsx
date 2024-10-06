import { FlashMessage } from '@/components'
import { Router } from '@/router'
import { store } from '@/services'
import { Provider } from 'react-redux'

const App = () =>
{
    window.flash = (message = '', type = 'success') => Bus.emit('flash-message', ({ message, type }))

    return (
        <Provider store={store}>
            <FlashMessage />
            <Router />
        </Provider>
    )
}

export default App