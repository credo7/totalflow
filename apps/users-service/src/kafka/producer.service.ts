import {Kafka, Producer, ProducerRecord} from 'kafkajs';

import {Injectable, OnApplicationShutdown, OnModuleInit} from '@nestjs/common';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
    private readonly kafka = new Kafka({
        brokers: ['kafka-internal.io:9092'],
    });

    private readonly producer: Producer = this.kafka.producer();

    async onModuleInit() {
        await this.producer.connect();
    }

    async produce(record: ProducerRecord) {
        await this.producer.send(record);
    }

    async onApplicationShutdown() {
        await this.producer.disconnect();
    }
}
