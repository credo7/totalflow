import {Consumer, ConsumerRunConfig, ConsumerSubscribeTopic, Kafka} from 'kafkajs';

import {Injectable, OnApplicationShutdown} from '@nestjs/common';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
    private readonly kafka = new Kafka({
        brokers: ['kafka-internal.io:9092'],
    });

    private readonly consumers: Consumer[] = [];

    async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig) {
        const consumer = this.kafka.consumer({groupId: 'welcomeMsg'});
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
    }

    async onApplicationShutdown() {
        // eslint-disable-next-line no-restricted-syntax
        for (const consumer of this.consumers) {
            // eslint-disable-next-line no-await-in-loop
            await consumer.disconnect();
        }
    }
}
