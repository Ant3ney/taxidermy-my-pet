import React, { useContext } from 'react';
import { GlobalContext } from '../utilities/GlobalContex';
import Landing from './landing/Index';
import Home from './home/index';

export default function Body(){
    const size = useContext(GlobalContext).size;
    const nav = useContext(GlobalContext).nav;

    if(nav === 'landing'){
        return(<Landing />);
    }
    else if(nav === 'home'){
        return(<Home />);
    }
    else if(nav === 'pethub'){
        return(<div>
            This is the pethub page
        </div>);
    }
    else if(nav === 'createpet'){
        return(<div>
            This is the createpet page
        </div>);
    }
    else if(nav === 'addfriend'){
        return(<div>
            This is the addfriend page
        </div>);
    }
    else if(nav === 'signup'){
        return(<div>
            This is the signup page
        </div>);
    }
    else if(nav === 'signin'){
        return(<div>
            This is the signin page
        </div>);
    }
    return(<div>
        This is the body
    </div>);
}