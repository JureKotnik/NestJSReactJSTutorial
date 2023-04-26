import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { Base } from './base.entity'
import { Order } from './order.entity'

@Entity()
export class OrderItem extends Base {
  @Column()
  product_title: string

  @Column()
  price: number

  @Column()
  quantity: number

  @ManyToOne(() => Order, (order) => order.order_items)
  @JoinColumn({ name: 'order_id' })
  order: Order
}
