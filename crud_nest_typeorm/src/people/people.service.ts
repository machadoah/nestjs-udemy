import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private readonly peopleRepository: Repository<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const existingPerson = await this.peopleRepository.findOneBy({
      email: createPersonDto.email,
    });

    if (existingPerson) {
      throw new ConflictException(
        `This email "${createPersonDto.email}" already exists.`,
      );
    }

    const personData = {
      name: createPersonDto.name,
      passwordHash: createPersonDto.password,
      email: createPersonDto.email,
    };
    const newPerson = this.peopleRepository.create(personData);

    await this.peopleRepository.save(newPerson);
    return newPerson;
  }

  async findAll() {
    return await this.peopleRepository.find({ order: { id: 'desc' } });
  }

  async findOne(id: number) {
    const person = await this.peopleRepository.findOneBy({ id: id });

    if (!person) {
      throw new NotFoundException('Person not exists.');
    }

    return person;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  async remove(id: number) {
    const person = await this.peopleRepository.findOneBy({ id: id });

    if (!person) {
      throw new NotFoundException('Person not exists.');
    }

    return this.peopleRepository.remove(person);
  }
}
