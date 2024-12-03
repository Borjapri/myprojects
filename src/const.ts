export const ROUTES = {
    home: '/home',
    events: '/events',
    eventId: (id:MyEvent["id"])=> `${ROUTES.events}/${(id)}`
}