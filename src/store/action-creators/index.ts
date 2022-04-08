import * as UserActionCreators from './user'
import * as OrderActionCreators from './order'

export default {
    ...UserActionCreators,
    ...OrderActionCreators
}