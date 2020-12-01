import {Property} from "../../../";

export default class Missing {

    @Property({
        doc: 'The name of the thing',
        default: 'Convict',
        env: 'MY_CONFIG_NAME'
    })
    public name: string;

    //This property is "missing" but will still be referenced
    // @Property({
    //     doc: 'A fairly large shout',
    //     default: 'Eureka!',
    //     env: 'MY_SHOUT'
    // })
    // public shout: string;

}
