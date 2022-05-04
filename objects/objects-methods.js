// a method is an object property whose value is a function.
// this-> its a way to access our object properties inside of a method so we can access
// objectに関数を入れる効果は、objectの外で定義するよりも関連がわかりやすいところ、thisでpropertyにaccessできるので、コードがスッキリするところ。

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        // console.log(this) この関数が含まれるobject全体が出力されるのがわかる
        // return を不等式にすると返り血はtrue or false 

        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))